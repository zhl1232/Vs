import { isBoolean } from 'lodash';

export default {
    data() {
        return {
            timer: null,
            reference: null,
            scale: null,
            pause: true,
            play: null
        }
    },
    methods: {
        setPause(n) {
            if (isBoolean(n)) this.pause = n;
            else this.pause = !this.pause;
        }
    },
    watch: {
        pause(n) {
            if (n) this.timer.stop();
            if (!n) this.play();

            this.$emit('change', n);
        }
    }
};
