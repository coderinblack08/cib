new Vue({
    el: '#app',
    data: {
        name: '',
        link: '',
        error: '',
        success: ''
    },
    methods: {
        async createUrl() {
            const body = {
                name: this.name,
                link: this.link
            };
            const result = await fetch('/', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            const response = await result.json();
            if (response.isError) {
                this.error = response;
                this.success = '';
            }
            else {
                this.success = response;
                this.error = '';
            }
        }
    }
});