import { test, expect, request } from '@playwright/test';

test('ReqRes API Automation', async () => {

    const apiContext = await request.newContext({
        baseURL: 'https://reqres.in/api',
        extraHTTPHeaders: {
            'x-api-key': 'reqres-free-v1'
        }
    });

    // ==========================
    // Create User
    // ==========================

    const createResponse = await apiContext.post('/users', {
        data: {
            name: 'Ajay',
            job: 'QA Engineer'
        }
    });

    expect(createResponse.status()).toBe(201);

    const createResponseBody = await createResponse.json();

    console.log('Create User Response:', createResponseBody);

    const userId = createResponseBody.id;

    expect(userId).toBeTruthy();

    console.log(`Created User ID: ${userId}`);

    // ==========================
    // Get User Details
    // ==========================

    const getResponse = await apiContext.get('/users/2');

    expect(getResponse.status()).toBe(200);

    const getResponseBody = await getResponse.json();

    console.log('Get User Response:', getResponseBody);

    expect(getResponseBody.data.id).toBe(2);
    expect(getResponseBody.data.email).toContain('@reqres.in');

    // ==========================
    // Update User
    // ==========================

    const updateResponse = await apiContext.put(`/users/${userId}`, {
        data: {
            name: 'Ajay Updated',
            job: 'Senior QA Engineer'
        }
    });

    expect(updateResponse.status()).toBe(200);

    const updateResponseBody = await updateResponse.json();

    console.log('Update Response:', updateResponseBody);

    expect(updateResponseBody.name).toBe('Sandeep Updated');
    expect(updateResponseBody.job).toBe('Senior QA Engineer');
    expect(updateResponseBody.updatedAt).toBeTruthy();

});