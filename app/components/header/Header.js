class Header {
	render() {
		const html = `
      <div class="container">
        <div class="header__inner">
          <p>Header</p>
        </div>
      </div>
    `

		ROOT_HEADER.innerHTML = html
	}
}

const headerPage = new Header()
