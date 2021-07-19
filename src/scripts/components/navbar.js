import bootstrap from "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import css from "../../styles/style.css";
import pramuja from "../../images/pramuja.png";

class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                    <style>
                        ${bootstrap}
                        ${css}
                    </style>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">
                          <a class="navbar-brand" href="#">
                            <img src="${pramuja}" alt="logo" class="d-inline-block align-text-top">
                            ayolawancovid19
                          </a>
                          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                              <a class="nav-link active" aria-current="page" href="#">Home</a>
                              <a class="nav-link" href="https://pedulilindungi.id/login">Vaksin</a>
                            </div>
                          </div>
                          <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success" type="submit">Search</button>
                          </form>
                        </div>
                      </nav>`;
  }
}

customElements.define("nav-bar", NavBar);
