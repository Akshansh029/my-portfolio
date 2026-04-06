# 2-Tier AWS Infrastructure with Terraform

This project demonstrates the implementation of a robust 2-tier AWS infrastructure using Terraform as Infrastructure as Code (IaC). The architecture separates the web tier (presentation layer) from the database tier (data layer), providing a scalable, secure, and maintainable cloud solution.

The infrastructure is designed to host web applications with high availability, automatic scaling, and secure database connectivity. All resources are provisioned and managed through Terraform, ensuring consistent deployments and easy infrastructure management.

## Architecture

### Components

**Web Tier (Public Layer):**

- Application Load Balancer (ALB) for traffic distribution
- Auto Scaling Group for EC2 instances
- EC2 instances hosting the web application
- Security Groups for controlled access

**Database Tier (Private Layer):**

- Amazon RDS (MySQL/PostgreSQL) with Multi-AZ deployment
- Database subnet groups across multiple AZs
- Security Groups restricting access to web tier only

**Supporting Infrastructure:**

- VPC with public and private subnets
- Internet Gateway for public internet access
- NAT Gateway for outbound internet access from private subnets
- Route tables for proper traffic routing
- CloudWatch metric alarms

## Tech Stack

- Terraform
- AWS Services
- AWS CLI

## Implementation

### Key Features Implemented:

- **VPC Configuration**: Custom VPC with CIDR block and DNS resolution enabled
- **Subnet Architecture**: Public subnets for load balancer, private subnets for web servers, database subnets for RDS
- **High Availability**: Multi-AZ deployment across different availability zones
- **Load Balancing**: Application Load Balancer with health checks and auto-scaling integration
- **Auto Scaling**: Auto Scaling Group with launch templates for dynamic scaling
- **Database Setup**: RDS instance with automated backups and security group restrictions
- **Security Implementation**: Security groups with least privilege access principles
- **Network Routing**: Proper route tables for public and private subnet traffic
- **NAT Gateway**: Outbound internet connectivity for private instances
- **Resource Tagging**: Consistent tagging strategy for resource management

### Directory Structure:

```text
2-Tier-AWS-Infrastructure-Terraform
│   .gitignore
│   .terraform.lock.hcl
│   backend.tf
│   main.tf
│   README.md
│   variables.tf
│   variables.tfvars
│
└───modules
    ├───aws-alb
    │       gather.tf
    │       main.tf
    │       variables.tf
    │
    ├───aws-auto-scaling
    │       deploy.sh
    │       gather.tf
    │       main.tf
    │       variables.tf
    │
    ├───aws-iam
    │       iam-instance-profile.tf
    │       iam-policy.json
    │       iam-policy.tf
    │       iam-role.json
    │       iam-role.tf
    │       variables.tf
    │
    ├───aws-rds
    │       gather.tf
    │       main.tf
    │       variables.tf
    │
    ├───aws-sg
    │       gather.tf
    │       main.tf
    │       variables.tf
    │
    └───aws-vpc
            main.tf
            variables.tf
```

## Screenshots

### Instances

![EC2](/project-images/terraform-aws-infra/aws-ec2.png)

### VPC and Networking

![VPC](/project-images/terraform-aws-infra/aws-vpc.png)

### Load Balancer Configuration

![Load balancer](/project-images/terraform-aws-infra/aws-alb.png)

### Auto Scaling Group

![Auto Scaling Group](/project-images/terraform-aws-infra/aws-asg.png)

### RDS Database

![RDS](/project-images/terraform-aws-infra/aws-rds.png)

### CloudWatch

![CloudWatch](/project-images/terraform-aws-infra/aws-cloudwatch.png)

## What I Learnt

### Technical Skills:

- **Infrastructure as Code (IaC)**: Understanding Terraform syntax, modules, and best practices
- **AWS Networking**: VPC design, subnetting, routing, and security group configuration
- **High Availability Design**: Multi-AZ deployments and fault-tolerant architecture patterns
- **Load Balancing**: Application Load Balancer configuration and health checks
- **Auto Scaling**: Dynamic scaling policies and launch template management
- **Database Management**: RDS setup, security, and backup strategies

### DevOps Practices:

- **Version Control**: Managing infrastructure code in Git repositories
- **Environment Management**: Separating configurations for different environments
- **Resource Tagging**: Implementing consistent tagging strategies for cost management
- **Security Best Practices**: Implementing least privilege access and network segmentation
- **Monitoring and Logging**: Understanding CloudWatch integration and monitoring strategies

### AWS Services Mastery:

- Virtual Private Cloud (VPC) and networking components
- Elastic Compute Cloud (EC2) and Auto Scaling Groups
- Relational Database Service (RDS) configuration and management
- Application Load Balancer (ALB) setup and configuration
- Internet Gateway and NAT Gateway functionality
- Security Groups and Network ACLs

### Architecture Principles:

- **Separation of Concerns**: Understanding tier-based architecture design
- **Scalability**: Designing for horizontal and vertical scaling
- **Security**: Implementing defense in depth strategies
- **Cost Optimization**: Resource sizing and cost-effective deployment strategies
- **Disaster Recovery**: Multi-AZ deployment and backup strategies
