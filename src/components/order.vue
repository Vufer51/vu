<template>
<div>
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
                <v-divider></v-divider>
                <v-file-input
                        v-model="files"
                        label="Базы данных"
                        messages="не более 3"
                        :rules="[value => value.length < 4 || 'Не более 3 файлов']"
                        multiple
                        chips


                >
                    <template v-slot:selection="{ text, index }">
                        <v-chip
                                small
                                text-color="white"
                                color="#295671"
                                close
                                @click:close="remove(index)"
                        >
                            {{ text }}
                        </v-chip>
                    </template>

                </v-file-input>
                <v-file-input
                        v-model="avatar"
                        accept="image/*"

                        label="Аватар"
                >
                </v-file-input>
                <v-file-input
                        v-model="image"
                        accept="image/*"
                        label="Картинка"
                >
                </v-file-input>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
                <h3>Выберите услугу</h3>
                <v-select
                        :items="ServiceList"
                        label="Услуга"
                        v-model="SelectedService"

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
        <v-btn block color="secondary" dark >Block Button</v-btn>
        <div v-for="(file, i) in files" :key="i">
            {{file.name}}
        </div>
        {{SelectedService}} -
        {{ServiceList}} - {{ files}}
    </div>

</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Order',

        data: () => ({
            items:[],
            message: [],
            ServiceList: [],
            SelectedService:[],
            image:[],
            avatar:[],
            files:[],

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
            remove (index) {
                this.files.splice(index, 1)
            },

            loadservices() {
                // let temp=''
                axios
                    .get('index.php?action=getservicelist')
                    .then(response => (this.ServiceList = response.data))
                    .catch(error => console.log(error));
                //let services=Object.keys(temp)
                //return services
           }
        }
    }
</script>
<style>
    .text-normal {
        text-transform: none; /* Заглавные буквы */
}
    .compact-checkbox {
        height: 0.7em;
    }
</style>