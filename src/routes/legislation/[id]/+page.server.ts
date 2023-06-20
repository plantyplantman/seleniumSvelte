import { getHTML } from '$lib/scripts/getHTML';
import { supabase } from '$lib/supabaseClient';

import type { PageServerLoad } from './$types';

export const load = (async ({ params: { id } }) => {
	const { data: res, error } = await supabase
		.from('Document')
		.select('index_url, combined_url, name')
		.eq('id', id);

	if (error || !res) {
		console.error(error);
		return { feed: [] };
	}

	const { index_url, combined_url, name } = res[0];
	const index_html = await getHTML(index_url);
	const combined_html = await getHTML(combined_url);

	return { index_html: index_html, combined_html: combined_html, name: name };
}) satisfies PageServerLoad;
