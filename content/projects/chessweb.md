> A real-time multiplayer chess platform — because building CRUD apps wasn't teaching me enough.

---

## About

Chess-Web is a full-stack, real-time multiplayer chess platform where two players connect, play a live game, and see every move reflected on each other's board with zero page reloads. Every move is validated server-side, every game is persisted to Postgres, and the whole thing is locked behind proper JWT auth with refresh token rotation.

It started as a WebSockets learning project. It turned into the most technically demanding thing I've built — stateful server sessions, concurrent move processing, server-managed game clocks, and a backend that has to be the single source of truth for a game that moves fast.

---

## Features

- **Real-time multiplayer** — WebSocket + STOMP protocol keeps both boards in sync with sub-100ms move propagation
- **Server-side move validation** — the `chesslib` engine runs on the backend; the client never has the final say on whether a move is legal
- **Game lobby** — create games with custom time controls, browse open games, join with one click
- **Server-managed timers** — clocks run on the server with a scheduled cleanup job that handles timeouts and abandoned games
- **In-game chat** — real-time messaging between players during a match
- **Move history** — full algebraic notation (SAN) with a scrollable move list synced to the game
- **PGN export** — download any game for analysis in external chess engines
- **Player profiles** — game history, stats, and past match records
- **JWT auth with refresh rotation** — short-lived access tokens, long-lived refresh tokens that rotate on use
- **Email verification** — new accounts verified via transactional email before login

---

## Tech Stack

### Backend

|                  |                                                           |
| ---------------- | --------------------------------------------------------- |
| **Runtime**      | Java 21 with Virtual Threads enabled                      |
| **Framework**    | Spring Boot 4.x                                           |
| **WebSocket**    | Spring WebSocket + STOMP messaging protocol               |
| **Auth**         | Spring Security + JWT (access + refresh token rotation)   |
| **Chess Engine** | chesslib — server-side move validation and FEN management |
| **Database**     | PostgreSQL + Spring Data JPA                              |
| **Migrations**   | Flyway                                                    |
| **Email**        | Resend API                                                |

### Frontend

|                |                                                         |
| -------------- | ------------------------------------------------------- |
| **Framework**  | Next.js 16 (App Router)                                 |
| **Language**   | TypeScript                                              |
| **Styling**    | Tailwind CSS 4                                          |
| **State**      | Zustand + React Context                                 |
| **Chess UI**   | react-chessboard + chess.js (client-side UX validation) |
| **WebSocket**  | @stomp/stompjs + SockJS                                 |
| **Animations** | Framer Motion + GSAP                                    |
| **Icons**      | Lucide React                                            |

---

## Architecture

The system follows a **decoupled client-server architecture** with a clear separation between real-time game communication and standard REST operations.

![Architecture](/project-images/chessweb/architecture.png)

**Key design decisions:**

**WebSocket + STOMP over REST** — chess moves need to reach both players in milliseconds. REST's request-response model can't push to clients; WebSocket can. STOMP adds pub-sub routing on top so each game has its own channel (`/topic/game.{id}`) and private messages route per-user.

**In-memory game store, Postgres on completion** — writing every move to the database mid-game would add unnecessary latency to the hot path. Active games live in a `ConcurrentHashMap<UUID, GameSession>` with fine-grained per-session locking. On game end, the full move list is flushed to Postgres in a single transaction.

**Server is the source of truth** — client-side `chess.js` validates moves for instant UI feedback (piece snaps back immediately on an illegal move), but the server re-validates everything with `chesslib` before broadcasting. Clients don't update their board from their own move — they wait for the server's broadcast.

**Java 21 Virtual Threads** — each WebSocket connection runs on a virtual thread, making it cheap to handle many concurrent games without blocking platform threads on I/O.

**Fine-grained concurrency** — `withGameLock(gameId, fn)` acquires a lock on the specific `GameSession` object, not the whole store. Two concurrent games don't block each other. Move processing and a background timeout scheduler both use this pattern.

---

## Screenshots

### Landing Page

![Landing Page](/project-images/chessweb/Landing_page.png)

### Game Lobby

![Game Lobby](/project-images/chessweb/Lobby_page.png)

### Live Game

![Live Game](/project-images/chessweb/Live_game.png)

### Mid-Game

![Mid Game](/project-images/chessweb/Mid_game.png)

### Game Over

![Game Over](/project-images/chessweb/Won_result.png)

### Player Profile

![Player Profile](/project-images/chessweb/Profile_page.png)

### Auth

| Login                                             | Register                                                |
| ------------------------------------------------- | ------------------------------------------------------- |
| ![Login](/project-images/chessweb/Login_page.png) | ![Register](/project-images/chessweb/Register_page.png) |

---

## Security

**JWT with refresh token rotation** — access tokens expire in 15 minutes. Refresh tokens are long-lived but rotate on every use: each refresh issues a new token and invalidates the old one. Stolen refresh tokens can only be used once before they're dead.

**WebSocket authentication** — a custom STOMP interceptor validates the JWT on the WebSocket handshake before the connection is established. Unauthenticated connections are rejected before they can subscribe to any game channel.

**Server-side move authorization** — before processing any move, the backend checks that the requesting user is actually a player in that game and that it's their turn. The game ID and player identity come from the server session, not the client payload.

**Email verification** — accounts can't log in until the email address is verified via a Resend-delivered confirmation link.

---

## What's Next?

- [x] **Making GameStore properly thread-safe**
- [ ] **ELO rating system** — calculate and update ratings after each game, with a leaderboard
- [ ] **Game analysis** — post-game engine analysis showing best moves and blunders
- [ ] **Friend system** — add friends and challenge them to a direct game
- [ ] **Tournament mode** — bracket-based multi-round tournaments
