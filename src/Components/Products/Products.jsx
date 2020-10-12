import React from 'react';
import './Product.css';



const Products = props => {
  

  return (
    <section id="product">
     
     <main>
	<div class="responsive-container">
		<div class="grid">
			<div class="grid-column">
								<a class="product" href="#product">
					<div class="product-image">
						<img src="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt=""/>
					</div>
					<div class="product-content">
						<div class="product-info">
							<h2 class="product-title">Produkt namn</h2>
							<p class="product-price">$ 10</p>
						</div>
						<button class="product-action"><i class="material-icons-outlined">♥</i></button>
					</div>
				</a>

				<a class="product" href="#product">
					<div class="product-image">
						<img src="https://www.hunkemoller.se/on/demandware.static/-/Library-Sites-hkm-content-global/default/dw1441db76/images/Evergreen/SubhomeDoutzenKroes/Q1_2019/15325_Doutzen_Modelpage_SFC_B1_M.jpg" alt=""/>
					</div>
					<div class="product-content">
						<div class="product-info">
							<h2 class="product-title">Produkt namn</h2>
							<p class="product-price">$ 9</p>
						</div>
						<button class="product-action"><i class="material-icons-outlined">♥</i></button>
					</div>
				</a>
				<a class="product" href="#product">
					<div class="product-image">
							<img src="https://x-raymodels.gr/wp-content/uploads/2019/04/XRAY-MODELS-ALBA-ROMAN-PORTRAIT-800x1000.jpg" alt="" />
					</div>
					<div class="product-content">
						<div class="product-info">
							<h2 class="product-title">Produkt namn</h2>
							<p class="product-price">$ 9</p>
						</div>
						<button class="product-action"><i class="material-icons-outlined">♥</i></button>
					</div>
				</a>
			</div>
			<div class="grid-column">
				<a class="product" href="#product">
					<div class="product-image">
						<img src="https://www.giantmanagement.com/wp-content/uploads/2016/11/image8thumbnail-650x813.jpg" alt=""/>
					</div>
					<div class="product-content">
						<div class="product-info">
							<h2 class="product-title">Produkt namn</h2>
							<p class="product-price">$ 9</p>
						</div>
						<button class="product-action"><i class="material-icons-outlined">♥</i></button>
					</div>
				</a>
				<a class="product" href="#product">
					<div class="product-image"> 
						<img src="https://3.bp.blogspot.com/-bHnfliTIj2A/XQ2YpTUXNqI/AAAAAAAAADo/zmqI-xnRylEtXt1qJr_c3F2JieMzd__DACKgBGAs/w2048-h2732-c/elizabeth-turner-blonde-model-women-uhdpaper.com-4K-347.jpg" alt=""/>
					</div>
					<div class="product-content">
						<div class="product-info">
							<h2 class="product-title">Produkt namn</h2>
							<p class="product-price">$ 12</p>
						</div>
						<button class="product-action"><i class="material-icons-outlined">♥</i></button>
					</div>
				</a>
				<a class="product" href="#product">
					<div class="product-image">
						<img src="https://i.pinimg.com/originals/33/35/b1/3335b1232a8a81b7fe6c2ea17e484f8e.jpg" alt=""/>
					</div>
					<div class="product-content">
						<div class="product-info">
							<h2 class="product-title">Produkt namn</h2>
							<p class="product-price">$ 5</p>
						</div>
						<button class="product-action"><i class="material-icons-outlined">♥</i></button>
					</div>
				</a>
			</div>
			<div class="grid-column">
				<a class="product" href="#product">
					<div class="product-image">
						<img src="https://c6oxm85c.cloudimg.io/cdno/n/q85/https://az617363.vo.msecnd.net/imgmodels/models/MD10003026/thumbnailb66428bb21aba49a24e580914a3a931d_thumb.jpg" alt=""/>
					</div>
					<div class="product-content">
						<div class="product-info">
							<h2 class="product-title">Produkt namn</h2>
							<p class="product-price">$ 15</p>
						</div>
						<button class="product-action"><i class="material-icons-outlined">♥</i></button>
					</div>
				</a>
				<a class="product" href="#product">
					<div class="product-image">
						<img src="https://www.wallpaperup.com/uploads/wallpapers/2013/05/26/92638/aafbbfe3a9554eb1b7f58a397b86369b-700.jpg" alt=""/>
					</div>
					<div class="product-content">
						<div class="product-info">
							<h2 class="product-title">Produkt namn</h2>
							<p class="product-price">$ 5</p>
						</div>
						<button class="product-action"><i class="material-icons-outlined">♥</i></button>
					</div>
				</a>
        <a class="product" href="#product">
					<div class="product-image">
						<img src="https://c6oxm85c.cloudimg.io/cdno/n/q85/https://az617363.vo.msecnd.net/imgmodels/models/MD10003026/thumbnailb66428bb21aba49a24e580914a3a931d_thumb.jpg" alt="" />
					</div>
					<div class="product-content">
						<div class="product-info">
							<h2 class="product-title">Produkt namn</h2>
							<p class="product-price">$ 5</p>
						</div>
						<button class="product-action"><i class="material-icons-outlined">♥</i></button>
					</div>
				</a>
			</div>
      
		</div>
	</div>
</main>
        

<div class="form" id="upload-form">
    <div class="form-toggle"></div>
    <div class="form-panel one">
        <div class="form-header">
            <h1>Lägg ut en egen annons</h1>
        </div>
        <div class="form-content">
            <form>
                <div class="form-group"><label>Namn på plagg</label><input required="required" /></div>
                <div class="form-group"><label>Pris</label><input required="required" /></div>
                <div class="form-group"><button type="submit">Ladda upp</button></div>
            </form>
            <div class="form-group"><button onClick={props.toggleUpload}>Lägg till bild</button></div>
        </div>  
    </div>
    <div class="form-panel two">
    </div>    
</div>


<div className={props.showUpload === 'active' ? 'modal-active' : 'modal'}>
	<div class="modal-header">
		<div class="modal-logo">
			<span class="logo-circle">
          <i class="fa fa-folder-open"></i>
			</span>
		</div>
		<button class="btn-close" onClick={props.toggleUpload}>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="var(--c-text-secondary)"/></svg>
		</button>
	</div>
	<div class="modal-body">
		<h2 class="modal-title">Upload a file</h2>
		<p class="modal-description">Attach the file below</p>
		<button class="upload-area">
			<span class="upload-area-icon">
			</span>
			<span class="upload-area-title">Drag file(s) here to upload.</span>
			<span class="upload-area-description">
				Alternatively, you can select a file by <br/><strong>clicking here</strong>
			</span>
		</button>
	</div>
	<div class="modal-footer">
		<button class="btn-secondary" onClick={props.toggleUpload}>Cancel</button>
		<button class="btn-primary">Upload File</button>
	</div>
</div>



    </section>


    
  );
};
export default Products;
