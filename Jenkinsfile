
pipeline {
    agent any

    stages {

	   stage('Git Checkout') {
			steps {
				git branch: 'main',
					url: 'https://github.com/lovachittumuri/react-app.git'
			}
		}
        }

    post {
        success {
            echo 'CI/CD Pipeline Completed Successfully!'
        }

        failure {
            echo 'CI/CD Pipeline Failed. Please Check Jenkins Console Output.'
        }
    }
}