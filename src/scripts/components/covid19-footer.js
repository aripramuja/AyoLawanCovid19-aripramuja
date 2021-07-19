class covid19Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="card">
                        <div class="card-body text-center">
                        <p>2021 © aripramuja@pramuja.tech. All rights reserved.</p>
                        </div>
                    </div>`;
  }
}

customElements.define("covid19-footer", covid19Footer);
