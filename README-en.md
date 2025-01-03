# <p align="center">BitArctic:re</p>

<div align="center">

---

[Српски (🇷🇸)](README.md) | [English (🇬🇧)](README-en.md)

---

</div>

<div align="center">
<p>
<a href="https://github.com/crnobog69/bitarctic/stargazers"><img src="https://img.shields.io/github/stars/crnobog69/bitarctic?style=for-the-badge&logo=starship&color=C9CBFF&logoColor=C9CBFF&labelColor=302D41" alt="stars"></a>&nbsp;&nbsp;
<a href="https://github.com/crnobog69/bitarctic/"><img src="https://img.shields.io/github/repo-size/crnobog69/bitarctic?style=for-the-badge&logo=linux&logoColor=f9e2af&label=Size&labelColor=302D41&color=f9e2af" alt="REPO SIZE"></a>&nbsp;&nbsp;
<a href="https://github.com/crnobog69/bitarctic/commits/main/"><img src="https://img.shields.io/github/last-commit/crnobog69/bitarctic?style=for-the-badge&logo=github&logoColor=eba0ac&label=Last%20Commit&labelColor=302D41&color=eba0ac" alt="Last Commit"></a>&nbsp;&nbsp;
<a href="https://github.com/crnobog69/bitarctic/LICENSE"><img src="https://img.shields.io/github/license/crnobog69/bitarctic?style=for-the-badge&logo=&color=CBA6F7&logoColor=CBA6F7&labelColor=302D41" alt="LICENSE"></a>&nbsp;&nbsp;
</p>
</div>

## Hosting:

1. Fork the repository.
2. Create a [`Supabase`](https://supabase.com/) account.
3. Copy the `Project URL` and `anon` `public` keys.
4. You can create a `.env` file and set the variables like this:

```text
PUBLIC_SUPABASE_URL=
PUBLIC_SUPABASE_ANON_KEY=
```

5. In the `SQL Editor` on `Supabase`, paste the following:

```sql
-- First, drop existing policies
drop policy if exists "Enable insert for anonymous users" on pastes;
drop policy if exists "Enable select for anonymous users" on pastes;
drop policy if exists "Anyone can create pastes" on pastes;
drop policy if exists "Anyone can read pastes" on pastes;

-- Disable RLS temporarily to ensure a clean slate
alter table pastes disable row level security;

-- Enable RLS again
alter table pastes enable row level security;

-- Create policies with explicit permissions
create policy "Public insert access"
on pastes for insert
with check (true);

create policy "Public select access"
on pastes for select
using (true);

-- Grant necessary permissions to the anon role
grant usage on schema public to anon;
grant all on pastes to anon;
grant usage on all sequences in schema public to anon;
```

> [!NOTE]
> The `drop policy` section is not mandatory; it is only required if the user made a mistake.

6. Create a Vercel account (using your [`Github`](https://github.com/) or [`Gitlab`](https://gitlab.com/) account).
7. Select your repository and click `Import`.
8. Add `Environment Variables` and set the variables (or import them from the `.env` file).
9. Click `Publish`.
