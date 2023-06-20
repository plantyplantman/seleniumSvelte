import { supabase } from '$lib/supabaseClient';

import type { PageServerLoad } from './$types';

export const load = (async () => {
	const { data, error } = await supabase
		.from('Document')
		.select('id, name')
		.order('name', { ascending: true });

	if (error || !data) {
		console.error(error);
		return { feed: [] };
	}

	return { feed: data };
}) satisfies PageServerLoad;
