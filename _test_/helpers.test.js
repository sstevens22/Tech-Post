const { format_date } = require('../utils/helpers');
test('format_date() returns a date string', () => {
    const date = new Date('2021-05-01 11:45:08');
    expect(format_date(date)).toBe('5/01/2021');
});