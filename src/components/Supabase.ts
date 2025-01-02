const SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

// Create a new paste
const createPaste = async (content: string) => {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/pastes`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify({ content }),
  });
  return response.json();
};

// Get a paste by ID
const getPaste = async (id: string) => {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/pastes?id=eq.${id}&select=*`,
    {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data[0];
};

// Get all pastes
const getAllPastes = async () => {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/pastes?select=*`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });
  return response.json();
};

export { createPaste, getPaste, getAllPastes };
