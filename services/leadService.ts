
const AIRTABLE_BASE_ID = 'appmLNPbO9K6AWIWs';
const AIRTABLE_TABLE_ID = 'tblQj5zUrtzq486ko';

export interface LeadData {
  name: string;
  email: string;
  intent: string;
  priority: string;
  budget: string;
  details: string;
  source?: string;
}

export const submitLead = async (data: LeadData): Promise<{ success: boolean; error?: string }> => {
  const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY;

  if (!apiKey) {
    console.error('Airtable API key not configured');
    return { success: false, error: 'Configuration error' };
  }

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                name: data.name,
                email: data.email,
                intent: data.intent,
                priority: data.priority,
                budget: data.budget,
                details: data.details,
                status: 'New',
                source: data.source || 'Portfolio Website',
              },
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Airtable error:', errorData);
      return { success: false, error: 'Submission failed' };
    }

    return { success: true };
  } catch (error) {
    console.error('Lead submission error:', error);
    return { success: false, error: 'Network error' };
  }
};
