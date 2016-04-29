#coding=UTF-8


import urllib
import re
import os.path
import sys

def save_hits(list_of_hits):
  text = ""
  f = open("hits.txt","r")
  old_text = f.read().split()
  f.close()
  #~ print "OLD FILE CONTENTS: " + str(old_text)
  
  for hits in list_of_hits:
    for s in hits:
      if len(s) > 0 and s not in old_text:
        text += str(s) + "\n"
  
  f = open("hits.txt","w")
  f.write(text)
  f.close()

def do_regex(a_file):
  matches = None
  read_file = open(a_file,"r").read()
  
  matches = re.findall(r"([\w-]+@[\w-]+\.\w+)|([\w-]+\(@\)[\w-]+\.\w+)|([\w-]+\[@\][\w-]+\.\w+)", read_file)  
    
  if matches:
    print "Matches found!"
    save_hits(matches)
    
    
def get_file(url):
  local_file = "index.html"
  if not os.path.isfile(local_file):
    print "Downloading %s INTO %s" % (url, local_file)
    urllib.urlretrieve (url, local_file)
  
  do_regex(local_file)
  
  os.remove(local_file)
  
  
def main():
  args = sys.argv[1:]

  if not args:
    print 'usage: file.py URL'
    sys.exit(1)

  get_file(args[0])



if __name__ == '__main__':
  main()

