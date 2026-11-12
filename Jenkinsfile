
pipeline {
    agent any

    stages {

	   stage('Git Checkout') {
			steps {
				git branch: 'main',
					url: 'https://github.com/lovachittumuri/react-app.git'
			}
		}

        stage('Build') {
            steps {
                bat 'npm install'
                bat 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker Image ...... Waiting for 5 seconds'

                //bat 'docker build .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying Spring Boot and MySQL Containers'

                bat 'docker compose -f compose.yml up'

            }
        }

        stage('Verify Deployment') {
            steps {
                bat 'docker compose ps'
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