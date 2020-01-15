<template>
    <main class="main">
        <!-- Breadcrumb -->
        <ol class="breadcrumb">
            <li class="breadcrumb-item">Home</li>
            <li class="breadcrumb-item"><a href="#">Admin</a></li>
            <li class="breadcrumb-item active">Dashboard</li>
        </ol>
        <div class="container-fluid">
            <!-- Ejemplo de tabla Listado -->
            <div class="card">
                <div class="card-header">
                    <i class="fa fa-align-justify"></i> usuario
                    <button type="button" @click="openModal('person', 'register')" class="btn btn-secondary">
                        <i class="icon-plus"></i>&nbsp;Nuevo
                    </button>
                </div>
                <div class="card-body">
                    <div class="form-group row">
                        <div class="col-md-6">
                            <div class="input-group">
                                <select class="form-control col-md-3" id="opcion" name="opcion">
                                    <option value="nombre">Nombre</option>
                                    <option value="descripcion">Descripción</option>
                                </select>
                                <input type="text" id="texto" name="texto" class="form-control" placeholder="Texto a buscar">
                                <button type="submit" class="btn btn-primary"><i class="fa fa-search"></i> Buscar</button>
                            </div>
                        </div>
                    </div>
                    <table class="table table-bordered table-striped table-sm">
                        <thead>
                            <tr>
                                <th>Opciones</th>
                                <th>Nombre</th>
                                <th>apellido</th>
                                <th>Descriction</th>
                            </tr>
                        </thead>
                        <tbody>


                            <tr v-for="listperson in dataPerson" :key="listperson.id">
                                <td>
                                    <button type="button" @click="openModal('person', 'update', listperson)" class="btn btn-warning btn-sm">
                                        <i class="icon-pencil"></i>
                                    </button>&nbsp;
                                    <template v-if="listperson.condition">
                                        <button type="button" @click="deactive(listperson.id)" class="btn btn-danger btn-sm" >
                                            <i class="icon-trash"></i>
                                        </button>
                                    </template>
                                    <template v-else>
                                        <button type="button" @click="active(listperson.id)" class="btn btn-danger btn-sm" >
                                            <i class="icon-pencil"></i>
                                        </button>
                                    </template>
                                </td>
                                <td v-text="listperson.name"></td>
                                <td v-text="listperson.lastname"></td>
                                <td v-text="listperson.activity"></td>
                                <td>
                                    <div v-if="listperson.condition">
                                        <span class="success badge-success">Activo</span>
                                    </div>
                                    <div v-else>
                                        <span class="badge badge-danger">Desactivado</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <nav>
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#">Ant</a>
                            </li>
                            <li class="page-item active">
                                <a class="page-link" href="#">1</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">2</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">3</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">4</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">Sig</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <!-- Fin ejemplo de tabla Listado -->
        </div>
        <!--Inicio del modal agregar/actualizar-->
        <div class="modal fade" tabindex="-1" :class="{'mostrar' : modal}" role="dialog" aria-labelledby="myModalLabel" style="display: none;" aria-hidden="true">
            <div class="modal-dialog modal-primary modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" v-text="titleModal"></h4>
                        <button type="button" class="close" @click="closeModel()" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="" method="post" enctype="multipart/form-data" class="form-horizontal">
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label" for="text-input">Nombre</label>
                                <div class="col-md-9">
                                    <input type="text"  v-model="name" class="form-control" placeholder="Nombre de la persona">
                                    <span class="help-block">(*) Ingrese el nombre</span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label" for="text-input">Apellidos</label>
                                <div class="col-md-9">
                                    <input type="text"  v-model="lastname" class="form-control" placeholder="Apellido de la persona">
                                    <span class="help-block">(*) Ingrese el apellido</span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label" v-model="activity" for="email-input">Actividades</label>
                                <div class="col-md-9">  
                                    <input type="text"  class="form-control" placeholder="actividades">
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="closeModel()">Cerrar</button>
                        <button type="button" v-if="typeAction==1" class="btn btn-primary" @click="addPerson()">Guardar</button>
                        <button type="button" v-if="typeAction==2" @click="updatePerson()" class="btn btn-primary">actualizar</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>

    </main>
</template>

<script>
export default {
    data() {
        return {
            name: '', 
            lastname: '',
            activity: '',
            dataPerson: [],
            modal: 0,
            titleModal: '',
            typeAction: '',
            id_person: 0 
        }
    },
    methods: {
        listPerson() {
            let me = this;
            axios.get('/person').then((resp) =>{
                me.dataPerson = resp.data;  
            })
            .catch((err) =>console.log(err));
        },
        updatePerson(){
            let me = this;
            axios.put('/person/update', {
                'id': this.id_person,
                'name': this.name,
                'lastname': this.lastname,
                'activity': this.activity
            }).then((resp) =>{
                me.listPerson();
                me.closeModel();
            }).catch((err)=>{
                console.log(err);
            })
        },
        deactive(idPerson){
            let me = this
            Swal.fire({
                title: '¿Estás seguro?',
                text: "¡No podrás revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, bórralo!'
            }).then((result) => {
                if (result.value) {
                axios.put('/person/deactive', {
                'id': idPerson,
                'condition': 0
            }).then((resp) =>{
                console.log(resp);
                me.listPerson();
                me.closeModel();
            }).catch((err)=>{
                console.log(err);
            })
                }
            })
        },
        active(idPerson){
            let me = this
            Swal.fire({
                title: '¿Estás seguro?',
                text: "¡No podrás revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, Activarlo!'
            }).then((result) => {
                if (result.value) {
                axios.put('/person/active', {
                'id': idPerson,
                'condition': 1
            }).then((resp) =>{
                console.log(resp);
                me.listPerson();
                me.closeModel();
            }).catch((err)=>{
                console.log(err);
            })
                }
            })
        },
        addPerson() {
            let me = this;
            axios.post('/person/add', {
                'name': this.name,
                'lastname': this.lastname,
                'activity': this.activity
            }).then((resp) =>{
                me.listPerson();
                me.closeModel();
            }).catch((err) =>{
                console.log(err);

            })
        }
        ,
        closeModel(){
            this.modal = 0;
            this.name = "";
            this.lastname = "";
            this.activity = "";

        },
        openModal(model, acction, data=[]) {
            switch(model) {
                case 'person': {
                    switch(acction) {
                        case 'update': {
                            this.id_person = data['id'];
                            this.modal = 1;
                            this.name=data['name'];
                            this.lastname=data['lastname'];
                            this.activity=data['activity'];
                            this.titleModal = "actualizar Persona";
                            this.typeAction = 2;

                            break;
                        }
                        case 'register': {
                            this.modal = 1;
                            this.titleModal = "registrar Persona";
                            this.name = "";
                            this.lastname = "";
                            this.activity = "";
                            this.typeAction = 1;
                            break;
                        }
                    }
                    break;
                }
            }
        }
    },
    mounted() {
        this.listPerson();
    }
}
</script>
<style>
.modal-content{
    width: 100% !important;
    position: absolute !important;
}

.mostrar {
    display: list-item !important;
    opacity: 1 !important;
    position: absolute !important;
    background-color: #3c29297a !important;
}
</style>