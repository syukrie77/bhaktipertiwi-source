import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import Social from '../components/Social';

import demo1 from '../assets/images/brosur1.jpg';
import demo2 from '../assets/images/brosur2.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">
                SMK Bhakti Pertiwi Kota Tangerang Terakreditasi "B" 
                Siap Kerja, Santun, Mandiri dan Kreatif.
              </h1>
              <Scroll type="id" element="about">
                <a href="#about" className="btn btn-outline btn-xl">
                  Register Now!
                </a>
              </Scroll>
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo1} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="about bg-primary text-center" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">
              SMK Bhakti Pertiwi Kota Tangerang di bawah Yayasan Pendidikan 
	      Bhakti Pertiwi.
            </h2>
            <p>
              Membuka Program Diklat/Jurusan Akuntansi dan Keuangan Lembaga, 
	      Otomatisasi Tata Kelola dan Perkantoran (Adm. Perkantoran), 
	      Teknik Komputer Jaringan (TKJ).
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="program" id="program">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Program Diklat/Jurusan</h2>
          <p className="text-muted">
    	    SMK Bhakti Pertiwi Kota Tangerang           
          </p>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo2} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary"></i>
                    <h3>Otomatisasi Tata Kelola dan Perkantoran</h3>
                    <p className="text-muted">
                      Berkomunikasi melalui telepon, Memproses transaksi
	  	      keuangan, Melakukan dasar komunikasi, Melakukan prosedur
	 	      administarasi, Mengatur Perjalanan bisnis, Menggunakan
		      peralatan kantor.
                    </p>
		  </div>
		</div>
	        <div className="col-lg-6">
		  <div className="feature-item">
		  <i className="icon-camera text-primary"></i>
		    <h3>Peluang Kerja</h3>
                      <p className="text-muted">
                        Administrasi perkantoran, Account Receivable,
	  	        Staff HRD, Public Relalation, Receptionist,
		        Sekretaris Muda, Staff Bidang Kearsipan.
                      </p>
                   </div>
                 </div>
	      </div>
	      <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary"></i>
                    <h3>Akuntansi dan Keuangan Lembaga</h3>
	              <p className="text-muted">
	  	        Mengelola Administrasi kas, Mengelola buku jurnal,
		        Mengelola buku besar, Menyusun laporan keuangan dan
		        perpajakan, Mengelola kartu persediaan piutang 
	                dan hutang, Aplikasi komputer akuntansi (MYOB).
		      </p>
		    </div>
	          </div>
		  <div className="col-lg-6">
		    <div className="feature-item">
	              <i className="icon-camera text-primary"></i>
		      <h3>Peluang Kerja</h3>
		        <p className="text-muted">
		          Staff Akuntanasi/Kasir, Staff Administari kuangan,
		          Staff Administrasi penjualan, Staff Purchasing,
		          Staff Pajak dan umum, Staff Administrasi piutang.
		       </p>
                     </div>
                   </div>
                </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary"></i>
                    <h3>Teknik Komputer & Jaringan</h3>
                      <p className="text-muted">
                        Merakit Personal Komputer, Melakukan instalasi 
	                sistem operasi dasar, Melakukan instalasi sistem
		        operasi berbasis GUI (Graphical User Interface)
		        dan CLI (Command Line Interface), 
	                Melakukan instalasi software,
	                Melakukan instalasi perangkat jaringan lokal (LAN),
	                Melakukan instalasi perangkat jaringan luas (WAN).
                      </p>
                    </div>
                 </div>
               <div className="col-lg-6">
                 <div className="feature-item">
                   <i className="icon-lock-open text-primary"></i>
                     <h3>Peluang Kerja</h3>
                       <p className="text-muted">
                         Administrasi jaringan, Teknisi komputer dan laptop,
              	         Staff dibindag perkomputeran, Webmaster, Design 
	                 animator, Web designer.
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cta">
      <div className="cta-content">
        <div className="container">
          <h2>
            SMK Bhakti Pertiwi Kota Tangerang.
            <br />
            BiSA-HEBAT.
          </h2>
          <Scroll type="id" element="contact">
            <a href="#contact" className="btn btn-outline btn-xl">
              Let's Get Started!
            </a>
          </Scroll>
        </div>
      </div>
      <div className="overlay"></div>
    </section>

    <section className="contact bg-primary" id="contact">
      <div className="container">
        <h2>
          We
          <i className="fas fa-heart"></i>
          new friends!
        </h2>
        <Social />
      </div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
