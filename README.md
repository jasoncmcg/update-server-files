# update-server-files
Updates a file in a consistent location across a list of servers


#Requirements

This utility uses [Nodejs](https://nodejs.org).
After installation, use a commandline in the directory you place this folder.
Type: 

```
npm install
```

That will install the async dependency.

#How to use

Go into the directory and type:
node .

That will run the default JS file that is defined by the package.json file.

To update which file and contents that you are updating, open up the config.json file.

The filepath must look something like this:

```
"filePath": "\\sharename\\filename.txt"
```

This is a relative path. The server name is supplied by the serverList.json file.
the \\ is there because the \ must be escaped. So, make sure that you excape it, or you will get an error.

This has only been run in a Windows environment for updating the same file in the same place across all servers.

The next two lines are self-documenting:

```
	"replaceOld"  : "put the old text in here",
	"withNew"     : "put the next text in here"
```
	
You put what you want to replace in the replaceOld property and your new text in the withNew property.
replaceOld withNew