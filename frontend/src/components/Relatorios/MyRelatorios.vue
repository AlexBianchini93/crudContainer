<template>
    <h2>RELATÓRIOS</h2>
    
    <div>
        <table class="table table-hover table-striped" id="dataTable2">
            <thead>
                <tr>
                    <th>Cliente</th>
                    <th>Tipo de Movimentação</th>
                    <th>Quantidade Movimentada</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="container in containers" :key="container.cliente">
                    <td>{{container.cliente}}</td>
                    <td>{{container.tipo}}</td>
                    <td>{{container.quantidade}}</td>
                </tr>
            </tbody>
        </table>
        <table class="table">
            <thead>
                <tr>
                    <th>*</th>
                    <th>Total Importação</th>
                    <th>Total Exportação</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>Total</b></td>
                    <td>{{getTotal.importacao}}</td>
                    <td>{{getTotal.exportacao}}</td>
                </tr>
            </tbody>
        </table>
    </div>

<div></div>

</template>

<script>
import axios from 'axios'
import {baseApiUrl} from "../../globlal"
import 'jquery/dist/jquery.min.js';
import 'datatables.net-dt/js/dataTables.dataTables'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
 import $ from 'jquery'

export default {
    name:'MyRelatorios',

    data: function(){
        return {
            containers:{},
            getTotal:{}
        }
    },
    methods: {

        async getContainers(){
            await axios.get(`${baseApiUrl}/movimentacoes/relatorio/relatorio`).then(res => this.containers = res.data)
            await axios.get(`${baseApiUrl}/movimentacoes/Exportação`).then(res => this.getTotal.exportacao = res.data[0].count)
            await axios.get(`${baseApiUrl}/movimentacoes/Importação`).then(res => this.getTotal.importacao = res.data[0].count)
            console.log(this.getTotal)
        },
        
    },
    mounted() {
        this.getContainers()
        
        setTimeout(() => {
            $(document).ready(function() {
                var groupColumn = 0;
                var table = $('#dataTable2').DataTable({
                    "columnDefs": [{ 
                    "visible": false, 
                    "targets": groupColumn }],
                    
                    "order": [[ groupColumn, 'asc' ]],
                    "displayLength": 5,
                    "drawCallback": function () {
                        var api = this.api();
                        var rows = api.rows( {page:'current'} ).nodes();
                        var last=null;
        
                        api.column(groupColumn, {page:'current'} ).data().each( function ( group, i ) {
                            if ( last !== group ) {
                                $(rows).eq( i ).before(
                                    '<tr class="group"><td colspan="5" style="background-color:rgb(93, 124, 226)">'+group+'</td></tr>'
                                );
                                last = group;
                            }
                        });
                    }
                });
            
                $('#dataTable2 tbody').on( 'click', 'tr.group', function () {
                    var currentOrder = table.order()[0];
                
                    if ( currentOrder[0] === groupColumn && currentOrder[1] === 'asc' ) {
                        table.order( [ groupColumn, 'desc' ] ).draw();
                    }else {
                        table.order( [ groupColumn, 'asc' ] ).draw();
                    }
                });
            });
        }, 100);
    }
}
</script>

<style>

</style>