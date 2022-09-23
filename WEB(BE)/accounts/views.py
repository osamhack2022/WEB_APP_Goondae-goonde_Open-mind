from django.contrib import auth
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from django.contrib import messages
from django.db.utils import IntegrityError

# 회원가입
def signup(request):
    if request.user.is_authenticated:
        return redirect('/')
    if request.method == 'POST':
        if len(request.POST["username"]) < 4 or len(request.POST["username"]) > 20:
                return render(request, 'signup.html', messages.error(request, 'ID는 최소 4글자 최대 20글자입니다!'))           
        if request.POST['password1'] == request.POST['password2']:
            if len(request.POST['password1']) < 8 or len(request.POST['password1']) > 20:
                return render(request, 'signup.html', messages.error(request, '비밀번호는 최소 8글자 최대 20글자입니다!')) 
            
            try:
                user = User.objects.create_user(
                username=request.POST['username'],
                password=request.POST['password1'],
                email=request.POST['email'],
            )
            except IntegrityError:
                return render(request, 'signup.html', messages.error(request, '이미 존재하는 아이디입니다!'))
            
            messages.info(request, "회원가입이 완료되었습니다!")
            auth.login(request, user)
            return redirect('/')
        else:
        	return render(request, 'signup.html', messages.error(request, '비밀번호가 일치하지 않습니다!'))
    return render(request, 'signup.html')

# 로그인
def login(request):
    if request.user.is_authenticated:
        return redirect('/')
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect('/')
        else:
            return render(request, 'login.html', messages.error(request, '아이디 또는 비밀번호가 일치하지 않습니니다!'))
    else:
        return render(request, 'login.html')


# 로그아웃
def logout(request):
    auth.logout(request)
    return redirect('/')

