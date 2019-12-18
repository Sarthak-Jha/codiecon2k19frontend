<template>
    <div class="main">
        <v-col cols="12" sm="8" offset-sm="2">
            <v-card>
                <v-toolbar color="#1976d2" dark>
                    <v-toolbar-title>Group Form</v-toolbar-title>
                </v-toolbar>
                <v-list>
                    <v-list-item>
                        <v-file-input
                            :rules="rules"
                            accept="image/png, image/jpeg, image/bmp"
                            placeholder="Pick a group icon"
                            prepend-icon="mdi-camera"
                            label="Icon"
                            v-model="file"
                            @change="saveImage()"
                        ></v-file-input>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="onUpload">Upload</v-btn>
                    </v-list-item>
                    <v-list-item>
                        <v-card-text>
                            <v-form>
                                <v-text-field
                                    label="Group Name"
                                    name="groupname"
                                    type="text"
                                    v-model="groupName"
                                ></v-text-field>
                            </v-form>
                        </v-card-text>
                    </v-list-item>
                    <v-list-item>
                        <v-select
                                v-model="groupMembers"
                                :items="getUserList"
                                attach
                                chips
                                item-text="userName"
                                item-value="userId"
                                label="Add Members"
                                multiple
                        ></v-select>
                    </v-list-item>
                    <v-list-item>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" @click="submitForm()">Submit</v-btn>
                        </v-card-actions>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
    </div>
</template>

<script src='./js/groupform.js'></script>

<style lang="scss" scoped>
.main {
    margin-top: 80px;
    margin-bottom: 20px;
}
</style>
