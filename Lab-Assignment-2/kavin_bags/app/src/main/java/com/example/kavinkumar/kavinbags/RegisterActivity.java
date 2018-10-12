package com.example.kavinkumar.kavinbags;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.text.TextUtils;
import android.util.Patterns;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

public class RegisterActivity extends AppCompatActivity {

    FirebaseAuth firebaseAuth;

    EditText register_username, register_password;
    Button register_button;
    TextView direct_to_login;

    String register_username_value, register_password_value;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        firebaseAuth = FirebaseAuth.getInstance();

        register_username = (EditText) findViewById(R.id.register_username);
        register_password = (EditText) findViewById(R.id.register_password);

        register_button = (Button) findViewById(R.id.register_button);

        direct_to_login = (TextView) findViewById(R.id.direct_to_login);


        register_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                register_username_value = register_username.getText().toString();
                register_password_value = register_password.getText().toString();

                if(register_username_value.equals("")){
                    Toast.makeText(RegisterActivity.this,"Please Enter Your Email Id",Toast.LENGTH_LONG).show();
                    return;
                }

                if(register_password_value.equals("")){
                    Toast.makeText(RegisterActivity.this,"Please Enter Your Password",Toast.LENGTH_LONG).show();
                    return;
                }

                if(!Patterns.EMAIL_ADDRESS.matcher(register_username_value).matches())
                {
                    Toast.makeText(RegisterActivity.this,"Invalid Email Id",Toast.LENGTH_LONG).show();
                    return;
                }

                if(register_password_value.length()<6)
                {
                    Toast.makeText(RegisterActivity.this,"Password must be of minimum length 6 characters",Toast.LENGTH_LONG).show();
                    return;
                }

                firebaseAuth.createUserWithEmailAndPassword(register_username_value, register_password_value).addOnCompleteListener(RegisterActivity.this, new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        if (task.isSuccessful()) {
                            Toast.makeText(RegisterActivity.this, "User Registration Successfully", Toast.LENGTH_LONG).show();
                            finish();

                            Intent intent = new Intent(RegisterActivity.this, MainActivity.class);
                            startActivity(intent);
                        }
                        else{
                            Toast.makeText(RegisterActivity.this, "Email Id exists", Toast.LENGTH_LONG).show();
                        }
                    }
                });
            }
        });

        direct_to_login.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                Intent intent = new Intent(RegisterActivity.this, MainActivity.class);
                startActivity(intent);
                return false;
            }
        });
    }
}
