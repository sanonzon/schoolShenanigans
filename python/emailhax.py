#coding=UTF-8


import urllib
import re
import os.path
import sys

def save_hits(list_of_hits):
  text = ""
  f = open("hits.txt","r")
  old_text = f.read()
  f.close()
  #~ print "OLD FILE CONTENTS: " + str(old_text)
  
  for hits in list_of_hits:
    for s in hits:
      if len(s) > 0 and s not in old_text:
        text += str(s) + "\n"
  
  f = open("hits.txt","w")
  text = old_text + text
  f.write(text)
  f.close()
  

def find_email(local_file):
  matches = None
  f = open(local_file,"r")
  read_file = f.read()
  f.close()
  
  
  matches = re.findall(r"([\w\.-]+@[\w-]+\.\w+)|([\w\.-]+\(@\)[\w-]+\.\w+)|([\w\.-]+\[@\][\w-]+\.\w+)", read_file)  
    
  
  if matches:
    #~ print "Matches found!"
    save_hits(matches)
    
    
def dig_deeper(url, local_file):
  f = open(local_file,"r")
  text = f.read()
  f.close()
  
  matches = [x for x in re.findall(r"href=\"(\w+[/\.\w]+)\"",text) if not x[-3:] == "css" and not x[-3:] == "jsp" and not x[-2:] == "js"]
  strip_url = re.search(r"(^http://[\w+\./]+/).+",url)
  print strip_url
  print matches

    
def get_file(url, local_file=None):
  if not local_file == None:
    if not os.path.isfile(local_file):
      #~ print "Downloading %s INTO %s" % (url, local_file)
      urllib.urlretrieve (url, local_file)
      return True
    else:
      return False
  else:
    return False
  
  
  
def main():
  args = sys.argv[1:]

  if not args:
    print 'usage: file.py URL '
    sys.exit(1)
  
  local_file = "downloaded.txt"
  regextest = "regextest.txt"
  url = sys.argv[1]

  dig_deeper(url,regextest)

  get_file(url,local_file)

  if find_email(local_file):
    do_regex(local_file)
    
    
  #~ os.remove(local_file)

if __name__ == '__main__':
  main()
  

