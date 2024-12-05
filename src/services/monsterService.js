const MONSTER_API_URI = 'https://api.open5e.com';

const GetAllMonsters = async () => {
    const pageSize = 100;
    const fields = ['name', 'slug'];
    const requestUri = MONSTER_API_URI + '/monsters';
    const request = await fetch();
};
