import Navbar from "../NavBarRest"
import React, { Component} from "react";
import "../verEstadoPedido/ver_EstadoPedido.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url= "http://127.0.0.1:8000/endpoints/registrarPedido";

class RegistrarPedido extends Component {
    state={
        data:{
          pedido: []
        },
        modalInsertar: false,
        modalEliminar: false,
        form:{
          id:'',
          cod: '',
          producto: '',
          cliente:'',
          estado:'',
          tipoModal:'',
        }
      }
      peticionGet=()=>{
        axios.get(url).then(response=>{
          this.setState({data: response.data});
        }).catch(error=>{
          console.log(error.message);
        })
        }
        peticionPut=()=>{
          console.log(this.state.data.pedido)
            this.listaCopia = this.state.data.pedido
            this.listaCopia[this.state.form.id] = this.state.form 
            
            this.setState({data: {
              pedido: this.listaCopia
            }})
            console.log(this.state)
          }
      
        componentDidMount(){
          this.peticionGet();
          console.log(this.state)
        }
        modalInsertar=()=>{
            this.setState({modalInsertar: !this.state.modalInsertar});
          }
          
        seleccionarCodigo=(registro)=>{
            this.setState({
                tipoModal: 'actualizar',
                form:{
                id:registro.id,
                cod:registro.cod,
                producto:registro.producto,
                cliente:registro.cliente,
                estado:registro.estado,
            }
            })
        }
        handleChange=async e=>{
            e.persist();
            await this.setState({
              form:{
                ...this.state.form,
                [e.target.name]: e.target.value
              }
            });
            console.log(this.state.form);
            }
            
              componentDidMount() {
                this.peticionGet();
              }
        render(){
            const {form}=this.state; 

return(
<body>
    <Navbar />
    <div className="titulo">
          <h2>Registrar Entrega de Pedido</h2>
        </div>
    <div className="container-pedido text-center">
    
        <div>
            <input name = 'search' className="form-control me-2" type="text" placeholder="Codigo" aria-label="Search"/>

            <button type="submit" className="btn btn-outline-success">Buscar</button>
            <table class="table table-striped table-esp">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Codigo Buscado</th>
                    <th>Resumen Producto(s)</th>  
                    <th>Cliente Datos</th>
                    <th> Estado</th>                  
                </tr>
            </thead>
            <tbody>
            {this.state.data.pedido.map((registro,xd)=>{
                return(
                  <tr key = {xd}>
                  <td>{registro.id}</td>
                  <td>{registro.cod}</td>
                  <td>{registro.producto}</td>
                  <td>{registro.cliente}</td>
                  <td>{registro.estado}</td>
                  <td>
                    <button className="btn btn-primary" onClick={()=>{this.seleccionarCodigo(registro);this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                  </td>
                  </tr>
                )
              })}
            </tbody>
        </table>
        <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form.id}/>
                    <br />
                    <label htmlFor="nombre">Codigo</label>
                    <input className="form-control" type="text" name="cod" id="cod" onChange={this.handleChange} value={form.cod}/>
                    <br />
                    <label htmlFor="nombre">Producto</label>
                    <input className="form-control" type="text" name="producto" id="producto" onChange={this.handleChange} value={form.producto}/>
                    <br />
                    <label htmlFor="nombre">Cliente</label>
                    <input className="form-control" type="text" name="cliente" id="cliente" onChange={this.handleChange} value={form.cliente}/>
                    <br />
                    <label htmlFor="capital_bursatil">Estado</label>
                    <input className="form-control" type="text" name="estado" id="estado" onChange={this.handleChange} />
                  </div>
                </ModalBody>

                <ModalFooter>
                  {this.state.tipoModal==='insertar'?
                    <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Insertar
                  </button>: <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
                    Actualizar
                  </button>
  }
                    <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                </ModalFooter>
          </Modal>


          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
               Estás seguro que deseas eliminar a la empresa 
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal>
        </div>
    
    
    </div>
    </body>
    )
        }}

export default RegistrarPedido