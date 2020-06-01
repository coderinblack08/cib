new Vue({
    el: '#app',
    data: {
        name: '',
        link: '',
        error: '',
        success: ''
    },
    methods: {
        createUrl() {
            const body = {
                name: this.name,
                link: this.link
            };
            console.log(body);
            fetch('/', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            .then(result => result.json())
            .then(response => {
                console.log(response);
                if (response.isError) {
                    this.error = response;
                    this.success = '';
                }
                else {
                    this.success = response;
                    this.error = '';
                }
            });
        }
    }
});