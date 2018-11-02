import moment from 'moment';

// Get visible victims
export const getVisibleUsers = (victims, { text, sortBy, startDate, endDate }) => {
    return victims.filter((victim) => {
        const startDateMatch = typeof startDate !== 'number' || victim.date >= startDate;
        const endDateMatch = typeof endDate !== 'number' || victim.date <= endDate;
        const textMatch = victim.content.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.date < b.date ? 1 : -1;
        }
    });
}