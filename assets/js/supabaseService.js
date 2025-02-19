import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY || '';

let supabase = null;
if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Supabase URL или ключ не определены. Проверьте настройки переменных окружения.');
} else {
  supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
}

export { supabase };

export async function getFootballData() {
  if (!supabase) {
    console.error("Supabase не сконфигурирован. Проверьте настройки переменных окружения.");
    return [];
  }
  const { data, error } = await supabase
    .from('football_data')  // Замените 'football_data' на актуальное название таблицы, если необходимо
    .select('*');
  
  if (error) {
    console.error('Ошибка получения данных из Supabase:', error);
    return [];
  }
  return data;
} 