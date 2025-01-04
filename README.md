# <p align="center">БитАрктик:re</p>

<div align="center">

---

[Српски (🇷🇸)](README.md) | [English (🇬🇧)](README-en.md)

---

</div>

<div align="center">
<p>
<a href="https://github.com/crnobog69/bitarctic-re/stargazers"><img src="https://img.shields.io/github/stars/crnobog69/bitarctic-re?style=for-the-badge&logo=starship&color=C9CBFF&logoColor=C9CBFF&labelColor=302D41" alt="stars"></a>&nbsp;&nbsp;
<a href="https://github.com/crnobog69/bitarctic-re/"><img src="https://img.shields.io/github/repo-size/crnobog69/bitarctic-re?style=for-the-badge&logo=linux&logoColor=f9e2af&label=Size&labelColor=302D41&color=f9e2af" alt="REPO SIZE"></a>&nbsp;&nbsp;
<a href="https://github.com/crnobog69/bitarctic-re/commits/main/"><img src="https://img.shields.io/github/last-commit/crnobog69/bitarctic-re?style=for-the-badge&logo=github&logoColor=eba0ac&label=Last%20Commit&labelColor=302D41&color=eba0ac" alt="Last Commit"></a>&nbsp;&nbsp;
<a href="https://github.com/crnobog69/bitarctic-re/LICENSE"><img src="https://img.shields.io/github/license/crnobog69/bitarctic-re?style=for-the-badge&logo=&color=CBA6F7&logoColor=CBA6F7&labelColor=302D41" alt="LICENSE"></a>&nbsp;&nbsp;
</p>
</div>

## Хостовање:

1. Форкујте репозиторијум
2. Направите [`Supabase`](https://supabase.com/) профил
3. Копирајте `Project URL` и `anon` `public` кључеве
4. Можете креирати `.env` датотеку и подесити променљиве овако:

```text
PUBLIC_SUPABASE_URL=
PUBLIC_SUPABASE_ANON_KEY=
```

5. У `SQL Editor` на `Supabase` залепите ово:

```sql
-- First, drop existing policies
drop policy if exists "Enable insert for anonymous users" on pastes;
drop policy if exists "Enable select for anonymous users" on pastes;
drop policy if exists "Anyone can create pastes" on pastes;
drop policy if exists "Anyone can read pastes" on pastes;

-- Disable RLS temporarily to ensure clean slate
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
> _drop policy_ није потребан, он служи само ако је корисник погрешио.

6. Направите Vercel профил (са вашим [`Github`](https://github.com/) или [`Gitlab`](https://gitlab.com/) налогом)
7. Изаберите Ваш репозиторијум и кликните на `Import`
8. Додајте `Environment Variables` и подесите променљиве (или увезите из датотеке `.env`)
9. Кликните `Publish`.
