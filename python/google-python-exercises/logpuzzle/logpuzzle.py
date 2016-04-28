#!/usr/bin/python
# Copyright 2010 Google Inc.
# Licensed under the Apache License, Version 2.0
# http://www.apache.org/licenses/LICENSE-2.0

# Google's Python Class
# http://code.google.com/edu/languages/google-python-class/

import os
import re
import sys
import urllib

"""Logpuzzle exercise
Given an apache logfile, find the puzzle urls and download the images.

Here's what a puzzle url looks like:
10.254.254.28 - - [06/Aug/2007:00:13:48 -0700] "GET /~foo/puzzle-bar-aaab.jpg HTTP/1.0" 302 528 "-" "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.6) Gecko/20070725 Firefox/2.0.0.6"
"""


def read_urls(filename):
  """Returns a list of the puzzle urls from the given log file,
  extracting the hostname from the filename itself.
  Screens out duplicate urls and returns the urls sorted into
  increasing order."""
  # +++your code here+++
  f = open(filename, "r")
  the_file = f.read()
  f.close()
  
  the_list = []
  matches = re.findall(r"GET (.+\.jpg|.+\.png) HTTP", the_file)
  url = "http://code.google.com"
  for match in matches:
    if str(match) not in the_list:
      the_list.append(match)
  
  the_list = sorted(the_list)
  the_list.insert(0,url)
  
  return the_list

def download_images(img_urls, dest_dir):
  """Given the urls already in the correct order, downloads
  each image into the given directory.
  Gives the images local filenames img0, img1, and so on.
  Creates an index.html in the directory
  with an img tag to show each local image file.
  Creates the directory if necessary.
  """
  # +++your code here+++
  # OVERKILL SHIT RIGHT HERE
  #~ makedirdirs = []
  #~ [(re.search(r"([\w-]+/)+",f).group()[:-1] not in makedirdirs) and makedirdirs.append(re.search(r"([\w-]+/)+",f).group()[:-1]) for f in img_urls[1:]]
  #~ print makedirdirs
  
  #~ for x in makedirdirs:
    #~ os.makedirs(str(dest_dir + "/" + x))
  ################ ENDS HERE E############
  counter = 0
  if not os.path.exists(dest_dir):
    os.mkdir(dest_dir)
  text = "<html><head></head><body>"
  for link in img_urls[1:]:
    urllib.urlretrieve (img_urls[0] + link, "%s/img%s.%s"%(dest_dir, counter, link[-3:]))
    counter += 1
    text += "<img src=\"img%s.%s\">" % (counter,link[-3:])
  #~ for f in folders_to_create:
    #~ makedirdirs.append(re.search(r"([\w-]+/)+",f).group() if not in makedirdirs)
  #~ print makedirdirs
  
  
  
  
  text += "</body></html>"
  
  f = open("%s/index.html"%dest_dir,"w")
  f.write(text)
  f.close()
  
  
  
  
  
  #~ base_dir = os.getcwd() + "/" + dest_dir
  #~ print base_dir
  #~ if not os.path.exists(base_dir):
    #~ os.mkdir(base_dir)
  #~ print base_dir
  #~ for folder in folders_to_create:
    #~ current_dir = base_dir
    #~ dirs = folder.split("/")
    #~ # crop filenames and staring shit
    #~ for d in dirs[1:-1]:
      #~ if not os.path.exists(str(current_dir + d)):
        #~ os.mkdir(str(current_dir + d))
        #~ current_dir += "/"+d
        #~ print "CURRENT DIR IN LOOP: %s" %current_dir
      #~ else:
        #~ print "DEN FANNS"
        #~ sys.exit()
    #~ print dirs
    #~ for m in match:
      #~ if not os.path.exists(m):
        #~ os.mkdir(m)
      
  
  
  
  
  

def main():
  args = sys.argv[1:]

  if not args:
    print 'usage: [--todir dir] logfile '
    sys.exit(1)

  todir = ''
  if args[0] == '--todir':
    todir = args[1]
    del args[0:2]

  img_urls = read_urls(args[0])

  if todir:
    download_images(img_urls, todir)
  else:
    print '\n'.join(img_urls)

if __name__ == '__main__':
  main()
