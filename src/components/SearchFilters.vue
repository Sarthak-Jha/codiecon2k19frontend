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
                        <v-radio-group v-model="filters">
                            <v-radio  label="LATEST" value="LATEST"></v-radio>
                            <v-radio  label="POPULAR" value="POPULAR"></v-radio>
                            <v-radio  label="ACTIVE" value="ACTIVE"></v-radio>
                            <v-radio  label="PRICE" value="PRICE"></v-radio>
                        </v-radio-group>
                    </v-list-item>
                    <v-divider></v-divider>

                    <!-- <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Filter By Groups</v-list-item-title>
                            </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-select
                            v-model="groups"
                            :items="getAllGroupsByUser"
                            attach
                            chips
                            item-text="tagName"
                            label="Groups"
                            multiple
                        ></v-select>
                    </v-list-item> -->

                    <!-- <v-divider></v-divider> -->

                    <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Filter By Categories</v-list-item-title>
                            </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-select
                            v-model="category"
                            :items="getAllCategories"
                            attach
                            chips
                            item-text="categoryName"
                            item-value="categoryId"
                            label="Categories"
                        ></v-select>

                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Filter By Post Type</v-list-item-title>
                            </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-select
                            v-model="postType"
                            :items="getAllType"
                            attach
                            chips
                            item-text="tagName"
                            label="Post Type"
                        ></v-select> 

                    </v-list-item>

                    <v-divider></v-divider>



                    <v-list-item >
                            <v-list-item-content>
                                <v-list-item-title>Filter By Tags</v-list-item-title>
                            </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-select
                            v-model="postTags"
                            :items="getAllTags"
                            attach
                            chips
                            item-text="tagName"
                            label="Tags"
                            multiple
                        ></v-select>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Filter By Location</v-list-item-title>
                            </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-select
                            v-model="location"
                            :items="getAllLocations"
                            attach
                            chips
                            item-text="name"
                            item-value="id"
                            label="Locations"
                        ></v-select>

                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Filter By Dates</v-list-item-title>
                            </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="">
                        <v-menu
                            v-model="startMenu"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on }">
                            <v-text-field
                                v-model="startDate"
                                label='From'
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker v-model="startDate" @input="startMenu = false"></v-date-picker>
                        </v-menu>
                    </v-list-item>

                    <v-list-item @click="">
                        <v-menu
                            v-model="endMenu"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on }">
                            <v-text-field
                                v-model="endDate"
                                label='To'
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker v-model="endDate" @input="endMenu = false"></v-date-picker>
                        </v-menu>
                    </v-list-item>

                    <v-divider></v-divider>
                </v-list>
            </v-card>
        </v-col>
    </div>
</template>

<script src='./js/searchfilters.js'></script>
<style lang="scss" scoped>

</style>