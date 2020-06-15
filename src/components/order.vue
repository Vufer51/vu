<template>
    <v-container>
        <v-row>
            <v-col>
                <v-row justify="space-between" id="111">
                    <v-col cols="6">
                        <v-text-field label="Альфа-имя"
                                      outlined
                        >
                        </v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field label="Количество"
                                      outlined
                                      type="number"
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-textarea label="Сообщение"
                            v-model="message"
                            :messages="'Символов введено: '+MessageCount"
                >

                </v-textarea>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
                <h3>Выберите услугу</h3>
                <v-select
                        :items="servicelist"
                        label="Услуга"
                ></v-select>
                <v-row>
                    <v-col>
                        <v-card>
                            <v-card-title>
                                dffdfd
                            </v-card-title>
                            <v-card-text>
                    <v-checkbox label="Страна"
                                class="compact-checkbox"
                    ></v-checkbox>
                    <v-checkbox label="Штат/город"
                                class="compact-checkbox"
                    ></v-checkbox>
                    <v-checkbox label="Страна"
                                class="compact-checkbox"
                    ></v-checkbox>
                    <v-checkbox label="Страна"
                                class="compact-checkbox"
                    ></v-checkbox>
                    <v-checkbox label="Страна"
                                class="compact-checkbox"
                    ></v-checkbox>
                    <v-checkbox label="Страна"
                                class="compact-checkbox"
                    ></v-checkbox>
                                <br>
                            </v-card-text>
                        </v-card>
                    </v-col>

                </v-row>

            </v-col>
        </v-row>
{{temp}}
{{servicelist}}
    </v-container>

</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Order',

        data: () => ({
            items:[],
            message: [],
            servicelist: [],
            temp:[]
        }),
        computed: {
            MessageCount: function () {
                return String(this.message.length)
            },

        },
        mounted: function () {


            this.loadservices()
        },
        methods: {
            // async loadservices() {
            //     const res = await fetch('http://lk.ru/index.php?action=getservicelist', {
            //         referrer:"",
            //         mode:"no-cors",
            //         credentials:'omit'
            //     });
            //     const data = await res.json();
            //     this.servicelist = data;
            // }
            loadservices() {

                axios
                    .get('index.php?action=getservicelist')
                    .then(response => (this.temp = response.data))
                    .catch(error => console.log(error));
                this.servicelist = Object.values(this.temp).map(v => Object.values(v))

            }
        }
    }
</script>
<style>
    .compact-checkbox {
        height: 0.7em;
    }
</style>