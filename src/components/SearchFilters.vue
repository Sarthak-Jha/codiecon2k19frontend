<template>
    <div>
        <v-col cols="12" sm="12" offset-sm="0">
            <v-card>
                <v-toolbar color="#1976d2" dark>
                    <v-toolbar-title>Filters</v-toolbar-title>
                </v-toolbar>
                <v-list>

                    <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Sort By </v-list-item-title>
                            </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-switch v-model="filters" label="LATEST" value="LATEST"></v-switch>
                    </v-list-item>

                    <v-list-item>
                        <v-switch v-model="filters" label="POPULAR" value="POPULAR"></v-switch>
                    </v-list-item>

                    <v-list-item>
                        <v-switch v-model="filters" label="ACTIVE" value="ACTIVE"></v-switch>
                    </v-list-item>

                    <v-list-item>
                        <v-switch v-model="filters" label="PRICE" value="PRICE"></v-switch>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Filter By Groups</v-list-item-title>
                            </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-combobox
                            v-model="chips"
                            :items="items"
                            chips
                            clearable
                            label="Enter Groups"
                            multiple
                            solo
                        >
                            <template v-slot:selection="{ attrs, item, select, selected }">
                                <v-chip
                                    v-bind="attrs"
                                    :input-value="selected"
                                    close
                                    @click="select"
                                    @click:close="remove(item)"
                                >
                                    <strong>{{ item }}</strong>&nbsp;
                                    <span>(Group)</span>
                                </v-chip>
                            </template>
                        </v-combobox>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Filter By Categories</v-list-item-title>
                            </v-list-item-content>
                    </v-list-item>

                    <v-list-item cols="12" sm="12" offset-sm="0">
                        <v-combobox
                            v-model="chips"
                            :items="items"
                            chips
                            clearable
                            label="Enter Categories"
                            multiple
                            solo
                        >
                            <template v-slot:selection="{ attrs, item, select, selected }">
                                <v-chip
                                    v-bind="attrs"
                                    :input-value="selected"
                                    close
                                    @click="select"
                                    @click:close="remove(item)"
                                >
                                    <strong>{{ item }}</strong>&nbsp;
                                    <span>(Categorie)</span>
                                </v-chip>
                            </template>
                        </v-combobox>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Filter By Post Type</v-list-item-title>
                            </v-list-item-content>
                    </v-list-item>

                    <v-list-item cols="12" sm="12" offset-sm="0"> 
                        <v-combobox
                            v-model="chips"
                            :items="items"
                            chips
                            clearable
                            label="Enter Post Type"
                            multiple
                            solo
                        >
                            <template v-slot:selection="{ attrs, item, select, selected }">
                                <v-chip
                                    v-bind="attrs"
                                    :input-value="selected"
                                    close
                                    @click="select"
                                    @click:close="remove(item)"
                                >
                                    <strong>{{ item }}</strong>&nbsp;
                                    <span>(Post Type)</span>
                                </v-chip>
                            </template>
                        </v-combobox>
                    </v-list-item>

                    <v-divider></v-divider>



                    <v-list-item >
                            <v-list-item-content>
                                <v-list-item-title>Filter By Tags</v-list-item-title>
                            </v-list-item-content>
                    </v-list-item>

                    <v-list-item cols="12" sm="12" offset-sm="0">
                        <v-combobox
                            v-model="chips"
                            :items="items"
                            chips
                            clearable
                            label="Enter Tags"
                            multiple
                            solo
                        >
                            <template v-slot:selection="{ attrs, item, select, selected }">
                                <v-chip
                                    v-bind="attrs"
                                    :input-value="selected"
                                    close
                                    @click="select"
                                    @click:close="remove(item)"
                                >
                                    <strong>{{ item }}</strong>&nbsp;
                                    <span>(Tags)</span>
                                </v-chip>
                            </template>
                        </v-combobox>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Filter By Dates</v-list-item-title>
                            </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="">
                        <v-menu
                            v-model="menu"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on }">
                            <v-text-field
                                v-model="date"
                                :label="labelNameStart"
                                readonly
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
                        </v-menu>
                    </v-list-item>

                    <v-list-item @click="">
                        <v-menu
                            v-model="menu1"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on }">
                            <v-text-field
                                v-model="date"
                                :label="labelNameEnd"
                                readonly
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker v-model="date" @input="menu1 = false"></v-date-picker>
                        </v-menu>
                    </v-list-item>

                    <v-divider></v-divider>
                </v-list>
            </v-card>
        </v-col>
    </div>
</template>

<script>
import DatePicker from './DatePicker'

export default {
    name: 'searchFilters',
    components: {
        DatePicker
    },
    data () {
        return {
            date: new Date().toISOString().substr(0, 10),
            menu: false,
            menu1: false,
            labelNameStart: 'From',
            labelNameEnd: 'To',
            filters: [],
            chips: [],
            items: []
        }
    },
    methods: {
        remove (item) {
            this.chips.splice(this.chips.indexOf(item), 1)
            this.chips = [...this.chips]
        },
    }

}
</script>

<style lang="scss" scoped>

</style>