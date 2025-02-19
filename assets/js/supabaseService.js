import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Supabase URL или ключ не определены. Проверьте настройки переменных окружения.');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getFootballData() {
  const { data, error } = await supabase
    .from('football_data')  // Замените на название вашей таблицы
    .select('*');
  
  if (error) {
    console.error('Ошибка получения данных из Supabase:', error);
    return [];
  }
  
  return data;
} 