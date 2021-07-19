import daftarvaksin from "../../images/daftarvaksin.jpeg";
import kiatbelanjasehat from "../../images/kiatbelanjasehat.jpeg";
import pakaimasker from "../../images/pakaimasker.jpeg";
import konsultasigratis from "../../images/konsultasigratis.jpeg";

class covid19Content extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container mt-5">
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card h-100">
              <img src="${daftarvaksin}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Daftar Vaksin COVID-19 Yang Digunakan di Indonesia</h5>
                <a class="" href="https://covid19.go.id/edukasi/masyarakat-umum/daftar-vaksin-covid-19-yang-digunakan-di-indonesia">Baca</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="${kiatbelanjasehat}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">7 Kiat Tetap Aman Saat Belanja</h5>
                <a class="" href="https://covid19.go.id/edukasi/masyarakat-umum/7-kiat-tetap-aman-saat-belanja">Baca</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="${pakaimasker}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">PAKAI MASKER!</h5>
                <a class="" href="https://covid19.go.id/edukasi/masyarakat-umum/pakai-masker">Baca</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="${konsultasigratis}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Fasilitasi Konsultasi dan Obat Gratis via Telemedicine bagi Pasien COVID-19 di Jakarta</h5>
                <a class="" href="https://covid19.go.id/edukasi/masyarakat-umum/fasilitasi-konsultasi-dan-obat-gratis-telemedicine-bagi-pasien-covid-19-di-jakarta">Baca</a>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }
}

customElements.define("covid19-content", covid19Content);
