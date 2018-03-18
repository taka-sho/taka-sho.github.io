describe('Display　tests', function () {
  const root = 'http://localhost:8080/#/'

  function displayTop (url: string, client: any): any {
    return client.url(url).waitForElementVisible('body', 1000)
  }

  it('should display Top', (client: any) => {
    displayTop(root, client)
      .assert.containsText('#app .main div:nth-child(1) .container .row div:nth-child(1) h2', 'Name')
      .end()
  })
})
