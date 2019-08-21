pipeline {
  agent none
  stages {
    stage('') {
      steps {
        git(url: 'https://git-codecommit.eu-north-1.amazonaws.com/v1/repos/codecommit-tutorial', branch: 'master', changelog: true, credentialsId: 'aws-code-commit')
      }
    }
  }
}