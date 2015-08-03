@echo off
set curr_dir=%cd%
chdir /D "%~dp0"

node _ASSETS\tools\typedoc\bin\typedoc --includeDeclarations --externalPattern **/lib/** --mode file --name "HTML5 TypeScript Game Engine Primer Documentation" --out doc\ src\ src_lib\

chdir /D "%curr_dir%"

pause
