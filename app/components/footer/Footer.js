class Footer {
	render() {
		const html = `
      <div class="container">
        <div class="footer__inner">
          <p>Footer</p>
        </div>
      </div>
    `

		ROOT_FOOTER.innerHTML = html
	}
}

const footerPage = new Footer()
