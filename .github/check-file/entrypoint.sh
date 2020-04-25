#!/bin/sh -l

echo "Hello $1"
ls
echo $(ls)
time=$(date)
echo ::set-output name=time::$time
