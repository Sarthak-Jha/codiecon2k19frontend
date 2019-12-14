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
                        ></v-file-input>
                    </v-list-item>
                    <v-list-item>
                        <v-card-text>
                            <v-form>
                                <v-text-field
                                    label="Group Name"
                                    name="groupname"
                                    type="text"
                                ></v-text-field>
                            </v-form>
                        </v-card-text>
                    </v-list-item>
                    <v-list-item>
                        <v-combobox
                            v-model="chips"
                            :items="items"
                            chips
                            clearable
                            label="Enter Groups Members"
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
                                </v-chip>
                            </template>
                        </v-combobox>
                    </v-list-item>
                    <v-list-item>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary">Submit</v-btn>
                        </v-card-actions>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
    </div>
</template>

<script>
export default {
    name: 'groupForm',
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    margin-top: 80px;
    margin-bottom: 20px;
}
</style>