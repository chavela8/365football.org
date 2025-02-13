import { supabase } from './supabaseClient.js';

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