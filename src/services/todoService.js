import { supabase } from '../config/supabase.js';

export async function getTodos() {
  const { data, error } = await supabase
    .from('todos')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function addTodo(task) {
  const { data, error } = await supabase
    .from('todos')
    .insert([{ task, completed: false }])
    .select();

  if (error) throw error;
  return data[0];
}

export async function toggleTodo(id, completed) {
  const { data, error } = await supabase
    .from('todos')
    .update({ completed })
    .eq('id', id)
    .select();

  if (error) throw error;
  return data[0];
}

export async function deleteTodo(id) {
  const { error } = await supabase
    .from('todos')
    .delete()
    .eq('id', id);

  if (error) throw error;
}