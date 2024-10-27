import { writable } from 'svelte/store';

export const activeNav = writable<string>('about');
