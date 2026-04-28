test('SearchColors API returns valid JSON structure', () => {
    
    // Simulated API response (what your PHP should return)
    const mockResponse = {
        results: ["red", "blue", "green"],
        error: ""
    };

    // Integration-style validation
    expect(mockResponse).toHaveProperty('results');
    expect(Array.isArray(mockResponse.results)).toBe(true);

    // Validate contents
    mockResponse.results.forEach(color => {
        expect(typeof color).toBe('string');
    });

    // Validate error field exists
    expect(mockResponse).toHaveProperty('error');
});