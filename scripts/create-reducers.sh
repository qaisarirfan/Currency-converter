#!/usr/bin/env bash

reducersDirectory="$(dirname "$0")/../src/redux/reducers/"
reducersName=$1

directory="${reducersDirectory}${reducersName}"

if [ -z "$1" ]
    then
        echo "No reducers name supplied"
        exit 1
fi

echo "To change the templates edit the files at ./scripts/create-reducers-templates/"
echo "Adding reducers directory: ${directory}"

if [ -d "${directory}" ]
    then
        # Control will enter here if $DIRECTORY doesn't exist.
        echo "reducers directory already exists"
        exit 1
fi

mkdir -p ${directory}
mkdir -p "${directory}/__tests__/"

echo "Creating scaffolding..."

sed "s/REDUCERS/${reducersName}/g" "$(dirname "$0")/create-reducers-templates/actionCreators.js" > "${directory}/actionCreators.js"
sed "s/REDUCERS/${reducersName}/g" "$(dirname "$0")/create-reducers-templates/index.js" > "${directory}/index.js"
sed "s/REDUCERS/${reducersName}/g" "$(dirname "$0")/create-reducers-templates/actions.js" > "${directory}/actions.js"
sed "s/REDUCERS/${reducersName}/g" "$(dirname "$0")/create-reducers-templates/selectors.js" > "${directory}/selectors.js"
sed "s/REDUCERS/${reducersName}/g" "$(dirname "$0")/create-reducers-templates/test.js" > "${directory}/__tests__/index.js"

echo "reducers created!"
