<div align="center">

# 🏠 Hazel

### **Your household, organized.**

A private household operating system for managing **family life, home knowledge, and the things that keep a home running**.

<p>
  <img src="https://img.shields.io/badge/status-in%20development-F2C6E8?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Drizzle-C5F74F?style=for-the-badge&logoColor=black" alt="Drizzle" />
</p>

</div>

---

## 🧭 Navigation

**[What is Hazel?](#-what-is-hazel)** ·
**[Core Features](#-core-features)** ·
**[How It Fits Together](#-how-it-fits-together)** ·
**[Privacy & Security](#-privacy--security)** ·
**[Architecture](#-architecture)** ·
**[Tech Stack](#-tech-stack)** ·
**[Getting Started](#-getting-started)** ·
**[Roadmap](#-roadmap)** ·
**[Vision](#-vision)**

---

## ✦ What is Hazel?

Hazel is a **full-stack household management application** built around one idea:

> ### **Your household should have one place for everything that matters.**

Everyday home life is usually scattered across:

`Chats` · `Notes` · `Calendars` · `Shopping Lists` · `Documents` · `Spreadsheets` · `Memory`

Hazel brings those pieces into a single private system.

It connects:

**People → Responsibilities → Events → Things → Documents → Maintenance → Home**

The goal is not to build another generic productivity app.

The goal is to create a **digital operating system for the household**.

---

## 🎯 The Problem Hazel Solves

Household management creates hundreds of small questions:

<table>
<tr>
<td width="50%">

### “What needs to be done?”

Tasks, chores, errands, responsibilities and assignments.

</td>
<td width="50%">

### “What do we need to buy?”

Shared shopping lists for everyone in the household.

</td>
</tr>
<tr>
<td>

### “When is that happening?”

Household events, appointments and recurring schedules.

</td>
<td>

### “Where is that thing?”

A Home Map and item locations connect digital information to the physical home.

</td>
</tr>
<tr>
<td>

### “Is it still under warranty?”

Purchase information, warranties and maintenance are attached to household things.

</td>
<td>

### “Where is the manual?”

Documents, photos and household notes stay connected to the relevant information.

</td>
</tr>
</table>

---

# 🏡 Core Features

<table>
<tr>
<td width="50%" valign="top">

## 👨‍👩‍👧 Household

Manage the people and structure of the household.

- Multiple household memberships
- Invitations
- Admin / adult / child roles
- Role-based authorization
- Household switching
- Isolated household data

</td>
<td width="50%" valign="top">

## ✅ Tasks

Keep household responsibilities organized.

- Chores
- Cleaning
- Errands
- Assignments
- Maintenance work
- Completion tracking

</td>
</tr>

<tr>
<td width="50%" valign="top">

## 🛒 Shopping

A shared shopping space so everyone knows what needs to be bought.

**Less messaging. Less duplication. More clarity.**

</td>
<td width="50%" valign="top">

## 📅 Calendar

Keep household events together.

- Birthdays
- Appointments
- Family events
- Deadlines
- Maintenance visits
- Recurring events
- Timezone-aware scheduling

</td>
</tr>

<tr>
<td width="50%" valign="top">

## 📝 Notes, Photos & Documents

Create a shared household knowledge base.

Store:

- Notes
- Instructions
- Reference information
- Photos
- Documents

</td>
<td width="50%" valign="top">

## 📦 Household Things

Track the physical things your household owns.

Examples:

- Appliances
- Electronics
- Furniture
- Tools
- Kitchen equipment

</td>
</tr>

<tr>
<td width="50%" valign="top">

## 🛠️ Maintenance & Warranty

Keep ownership and maintenance information attached to the item it belongs to.

```text
Washing Machine
├── Purchase
├── Warranty
├── Location
├── Documents
├── Photos
└── Maintenance
```

</td>
<td width="50%" valign="top">

## 🗺️ Home Map

Connect the digital household with the physical home.

```text
Home
├── Kitchen
│   ├── Refrigerator
│   └── Dishwasher
├── Living Room
│   └── Television
└── Garage
    └── Tools
```

**Home → Room → Thing → Information**

</td>
</tr>

<tr>
<td width="50%" valign="top">

## 🔔 Notifications

Surface important information that needs attention:

- Assigned tasks
- Upcoming events
- Maintenance
- Warranty dates
- Household activity

</td>
<td width="50%" valign="top">

## 📜 Household History

Keep an audit trail of important household changes and provide context over time.

</td>
</tr>
</table>

---

# 🧩 How It Fits Together

Hazel is built around the relationship between **people and the home they manage together**.

```text
                         ┌───────────────┐
                         │     USERS     │
                         └───────┬───────┘
                                 │
                                 │ membership
                                 ▼
                      ┌─────────────────────┐
                      │ HOUSEHOLD MEMBERS   │
                      └──────────┬──────────┘
                                 │
                                 ▼
                         ┌───────────────┐
                         │  HOUSEHOLDS   │
                         └───────┬───────┘
                                 │
              ┌──────────────────┼──────────────────┐
              │                  │                  │
              ▼                  ▼                  ▼
          Daily Life         Knowledge            Home
              │                  │                  │
        ┌─────┼─────┐      ┌─────┼─────┐      ┌─────┼─────┐
        │     │     │      │     │     │      │     │     │
      Tasks  Shop  Events  Notes Docs Photos  Rooms Things Maintenance
```

This allows Hazel to connect information that is normally kept separately.

For example:

```text
Home
  ↓
Kitchen
  ↓
Dishwasher
  ↓
Purchase information
  ↓
Warranty
  ↓
Manual
  ↓
Maintenance history
```

---

# 🔐 Privacy & Security

Hazel is designed as a **private household application**.

Authentication and authorization are handled by the backend, with access determined by the authenticated user and their household membership.

## Authentication

```text
Signup
   ↓
Password hashing
   ↓
User account
   ↓
Login
   ↓
JWT generation
   ↓
HTTP-only cookie
   ↓
Authenticated API requests
```

## Security Principles

| Principle | Approach |
|---|---|
| Passwords | Secure hashes, never plaintext |
| Sessions | JWT stored in HTTP-only cookie |
| Authentication | Server-side |
| Authorization | Backend enforced |
| Household access | Membership based |
| Identity | Client-supplied identity is not trusted |
| Timestamps | Stored in UTC |
| Timezones | Stored explicitly |

---

# 🧱 Architecture

```text
┌─────────────────────────────────┐
│             Angular             │
│            Frontend             │
└────────────────┬────────────────┘
                 │
                 │ REST API
                 ▼
┌─────────────────────────────────┐
│             NestJS              │
│            Backend              │
├─────────────────────────────────┤
│ Authentication                  │
│ Authorization                   │
│ Validation                      │
│ Business Logic                  │
│ API                             │
└────────────────┬────────────────┘
                 │
                 │ Drizzle ORM
                 ▼
┌─────────────────────────────────┐
│        PostgreSQL / Supabase    │
│             Database            │
└─────────────────────────────────┘
```

---

# 🛠️ Tech Stack

<table>
<tr>
<th>Area</th>
<th>Technology</th>
</tr>
<tr>
<td>Frontend</td>
<td>Angular + TypeScript</td>
</tr>
<tr>
<td>Backend</td>
<td>NestJS + TypeScript</td>
</tr>
<tr>
<td>Authentication</td>
<td>Passport + JWT</td>
</tr>
<tr>
<td>Password hashing</td>
<td>bcrypt</td>
</tr>
<tr>
<td>ORM</td>
<td>Drizzle ORM</td>
</tr>
<tr>
<td>Database</td>
<td>PostgreSQL</td>
</tr>
<tr>
<td>Database platform</td>
<td>Supabase</td>
</tr>
<tr>
<td>API documentation</td>
<td>Swagger / OpenAPI</td>
</tr>
<tr>
<td>Package manager</td>
<td>pnpm</td>
</tr>
<tr>
<td>Code quality</td>
<td>ESLint + Prettier</td>
</tr>
</table>

---

# 📁 Project Structure

```text
hazel/
│
├── api/
│   ├── src/
│   │   ├── auth/
│   │   ├── user/
│   │   ├── db/
│   │   └── ...
│   ├── drizzle.config.ts
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
│
└── README.md
```

The frontend and backend are separate pnpm projects inside one Git repository.

---

# 🚀 Getting Started

## Requirements

- Node.js
- pnpm
- PostgreSQL / Supabase project

## 1. Clone

```bash
git clone <repository-url>
cd hazel
```

## 2. Start the API

```bash
cd api
pnpm install
```

Create `.env`:

```env
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret
```

Run migrations:

```bash
pnpm db:migrate
```

Start the backend:

```bash
pnpm start:dev
```

API:

```text
http://localhost:3000
```

Swagger:

```text
http://localhost:3000/api
```

## 3. Start the frontend

In another terminal:

```bash
cd frontend
pnpm install
pnpm start
```

Frontend:

```text
http://localhost:4200
```

---

# 🔑 API

Current authentication endpoints:

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/api/v1/auth/signup` | Create an account |
| `POST` | `/api/v1/auth/login` | Authenticate a user |
| `GET` | `/api/v1/auth/me` | Get the authenticated user |
| `POST` | `/api/v1/auth/logout` | Clear authentication |

Swagger / OpenAPI documentation is available while the backend is running.

---

# 🌍 Time & Localization

Hazel is designed with timezone support from the beginning.

- Persisted timestamps use UTC
- Users have a timezone
- Households have a timezone
- Dates and times are presented according to the relevant timezone

Default development values:

```text
Timezone: Europe/Budapest
Locale:   hu-HU
```

---

# 📡 Offline Direction

The initial offline strategy is intentionally simple:

> **Last Write Wins**

This provides a practical starting point for offline behavior while leaving room for more advanced conflict resolution later.

A CRDT-based approach may be considered as Hazel's offline model evolves.

---

# 🗺️ Roadmap

## Foundation

- [x] Backend foundation
- [x] Database foundation
- [x] Custom authentication
- [x] JWT authentication
- [x] HTTP-only auth cookie
- [x] Global authentication guard
- [x] User foundation

## Household

- [ ] Household creation
- [ ] Household membership
- [ ] Invitations
- [ ] Roles & permissions
- [ ] Household switching
- [ ] Dashboard

## Daily Life

- [ ] Tasks
- [ ] Shopping
- [ ] Calendar
- [ ] Recurring events
- [ ] Notifications

## Household Knowledge

- [ ] Notes
- [ ] Photos
- [ ] Documents
- [ ] Household things
- [ ] Maintenance
- [ ] Warranty tracking

## Home

- [ ] Home Map
- [ ] Rooms
- [ ] Item locations
- [ ] Visual home organization

## Later

- [ ] Advanced offline support
- [ ] Conflict resolution
- [ ] Multiple homes
- [ ] More integrations
- [ ] Household automation

---

# 🧠 Vision

Hazel aims to become the place a household opens when someone asks:

> **Where is that?**  
> **When do we need to do that?**  
> **Did we already buy this?**  
> **Who is responsible for it?**  
> **When was it last maintained?**  
> **Where is the manual?**  
> **Is it still under warranty?**

The long-term vision is a digital model of the household that connects:

## **People + Responsibilities + Information + Things + Locations + Time**

into one coherent system.

---

# 📌 Project Status

**Hazel is currently under active development.**

The project is being built incrementally, starting with the backend, database, authentication, and household foundations before expanding into the complete household experience.

```text
Architecture
     ↓
Database
     ↓
Authentication
     ↓
Households
     ↓
Daily Life
     ↓
Household Knowledge
     ↓
Home Management
```

---

# 📚 Documentation

The project documentation covers:

- Product requirements
- System architecture
- Authentication
- Database & Drizzle
- API reference
- Security & privacy
- Feature specifications
- Development tasks

---

# 🤝 Development Workflow

Hazel uses issue-based development and pull requests.

Feature branches are linked to their corresponding Linear issues.

Examples:

```text
HOM-12-authentication
HOM-44-users-crud
```

Pull requests should include:

- A clear summary
- Related issue
- Implementation details
- Testing information

---

<div align="center">

## 🏠 Hazel

### **One home. One place. Everything organized.**

Built with **Angular · NestJS · Drizzle · PostgreSQL**

</div>
