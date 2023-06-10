<template>
    <div>
        <div class="pageTitle">
            <span class="title">Curso X</span>
            <span class="dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>
        <div class="content">
            <div class="container">
                <course-modules/>

                <div class="right">
                    <div class="content">
                        <player-lesson/>
                        <supports-lesson/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CourseModules from './components/Modules.vue';
import PlayerLesson from './components/Player.vue';
import SupportsLesson from './components/SupportsLesson.vue';



export default {
    name: 'ModulesAndLessons',
    components: {
        CourseModules,
        PlayerLesson,
        SupportsLesson
    }

}
</script>
