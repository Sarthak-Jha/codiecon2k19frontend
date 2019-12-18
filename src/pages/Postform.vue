<template>
    <div class="postForm">
        <v-card>
            <v-toolbar
                    class="postForm__header"
                    dark
            >
                <v-toolbar-title>{{ this.selectedCategory.categoryName}}</v-toolbar-title>
            </v-toolbar>
            <v-list>
                <v-list-item>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                    v-model="postTitle"
                                    label="Title"
                                    name="title"
                                    type="text"
                            ></v-text-field>
                            <v-textarea
                                    v-model="postDescription"
                                    label="Description"
                            ></v-textarea>
                            <v-select
                                    :items="getAllLocations"
                                    label="Location"
                                    hide-details
                                    item-text="name"
                                    item-value="id"
                                    v-model="postLocation"
                                    v-if="showLocationField()"
                            ></v-select>
                            <v-text-field
                                    label="Price"
                                    name="price"
                                    type="numeric"
                                    v-model="postPrice"
                                    v-if="showPriceField()"
                            ></v-text-field>
                            <v-select
                                    v-model="postType"
                                    :items="getAllPostType"
                                    attach
                                    label="Post Type"
                            ></v-select>
                            <v-select
                                    v-model="postTags"
                                    :items="getAllTags"
                                    attach
                                    chips
                                    item-text="tagName"
                                    label="Tags"
                                    multiple
                            ></v-select>
                            <v-file-input
                                    :rules="rules"
                                    accept="image/png, image/jpeg, image/bmp"
                                    placeholder="Pick a Image for your post"
                                    prepend-icon="mdi-camera"
                                    label="Icon"
                                    v-model="file"
                                    @change="saveImage()"
                                    v-if="showImageField()"
                            ></v-file-input>
                            <v-btn color="primary" @click="onUpload" v-if="showImageField()">Upload</v-btn>
                            <v-list-item @click=""
                                 v-if="showStartDateField()"
                            >
                                <v-menu
                                        ref="menu"
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        transition="scale-transition"
                                        offset-y
                                        full-width
                                        min-width="290px"
                                >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                                v-model="postStartDate"
                                                label="Start date"
                                                readonly
                                                v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                            ref="picker"
                                            v-model="postStartDate"
                                            min="1950-01-01"
                                            @change="save"
                                    ></v-date-picker>
                                </v-menu>
                            </v-list-item>
                            <v-list-item @click=""
                                 v-if="showEndDateField()"
                            >
                                <v-menu
                                        ref="menu"
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        transition="scale-transition"
                                        offset-y
                                        full-width
                                        min-width="290px"
                                >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                                v-model="postEndDate"
                                                label="End date"
                                                readonly
                                                v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                            ref="picker"
                                            v-model="postEndDate"
                                            min="1950-01-01"
                                            @change="save"
                                    ></v-date-picker>
                                </v-menu>
                            </v-list-item>
                            <v-list-item></v-list-item>
                            <v-row justify="center">
                                <v-dialog v-model="dialog" persistent max-width="290">
                                    <template v-slot:activator="{ on }">
                                        <v-btn color="primary" dark v-on="on">Submit</v-btn>
                                    </template>
                                    <v-card>
                                        <v-card-title class="headline">Are You Sure?</v-card-title>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="green darken-1" text @click="dialog = false">No</v-btn>
                                            <v-btn color="green darken-1" text @click="submitForm()">Yes</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-list-item>
            </v-list>
        </v-card>
    </div>
</template>

<script src='./js/postform.js'></script>

<style lang="scss" scoped>
.postForm{
    margin: 75px 40px 40px 40px;
    &__header{
        background-color: #1976d2;
    }
}
</style>
