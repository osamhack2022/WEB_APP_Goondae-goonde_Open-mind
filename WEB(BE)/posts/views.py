from django.shortcuts import render, redirect, get_object_or_404
from .models import Post
from .forms import PostForm
from django.views.decorators.http import require_POST
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponseForbidden
from django.contrib import messages


def main(request):
    context = {
        'posts': Post.objects.all().order_by('-created_at')
    }
    return render(request, 'posts/main.html', context)


class AuthorRequiredMixin(object):
    def dispatch(self, request, *args, **kwargs):
        """ Making sure that only authors can update, delete articles """
        obj = self.get_object()
        if obj.author != self.request.user:
            return HttpResponseForbidden()
        return super(AuthorRequiredMixin, self).dispatch(request, *args, **kwargs)



@login_required
def new(request):
    context = {
        'form' : PostForm()
    }
    return render(request, 'posts/new.html', context)


@login_required
@require_POST
def create(request):
    form = PostForm(request.POST, request.FILES or None)
    if form.is_valid():
    	new_post = form.save(commit=False)
    	new_post.author = request.user  # author 속성에 로그인 계정 저장
    	new_post.save()
    return redirect('/') 
    

def show(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    default_view_count = post.view_count
    post.view_count = default_view_count + 1
    post.save()
    context = {
        'post' : post
    }
    return render(request, 'posts/show.html', context)

@login_required
def edit(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    if request.user != post.author:
        messages.error(request, '수정권한이 없습니다')
        return redirect('/')
    context = {
        'post': post,
        'form': PostForm(instance=post)
    }
    return render(request, 'posts/edit.html', context)


@login_required
@require_POST
def update(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    if request.user != post.author:
        messages.error(request, '수정권한이 없습니다')
        return redirect('/')
    form = PostForm(request.POST, request.FILES or None, instance=post)
    if form.is_valid():
        form.save()
    return redirect(post)
    

@login_required
@require_POST
def delete(request, post_id):
    post = Post.objects.get(pk=post_id)
    if request.user != post.author:
        messages.error(request, '삭제권한이 없습니다')
        return redirect('/')
    post.delete()
    return redirect('main')
    